<?php

/*
 * This file is part of fof/forum-stats-widget.
 *
 * Copyright (c) 2026 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace FoF\ForumStats;

use Flarum\Api\Schema;
use Flarum\Discussion\Discussion;
use Flarum\Post\CommentPost;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;
use FoF\ForumWidgets\SafeCacheRepositoryAdapter;
use Symfony\Contracts\Translation\TranslatorInterface;

use function FoF\ForumWidgets\Helper\pretty_number_format;

class AddStatsToApi
{
    public function __construct(private SafeCacheRepositoryAdapter $cache, private TranslatorInterface $translator, private SettingsRepositoryInterface $settings)
    {
    }

    public function __invoke(): array
    {
        return [
            Schema\Arr::make('fof-forum-stats-widget.stats')
                ->nullable()
                ->get(function (): ?array {
                    $interval = 600;

                    $stats = $this->cache->remember('fof-forum-stats-widget.stats', $interval, function (): array {
                        return [
                            'discussion_count'   => Discussion::count(),
                            'user_count'         => User::count(),
                            'comment_post_count' => CommentPost::count(),
                        ];
                    }) ?: [];

                    if (empty($stats)) {
                        return null;
                    }

                    $decimalPlaces = (int) $this->settings->get('fof-forum-stats-widget.decimal_places');

                    return [
                        'discussionCount' => [
                            'label'       => $this->translator->trans('fof-forum-stats-widget.forum.widget.stats.discussion_count'),
                            'icon'        => 'far fa-comments',
                            'value'       => $stats['discussion_count'],
                            'prettyValue' => pretty_number_format($stats['discussion_count'], $decimalPlaces),
                        ],
                        'userCount' => [
                            'label'       => $this->translator->trans('fof-forum-stats-widget.forum.widget.stats.user_count'),
                            'icon'        => 'fas fa-users',
                            'value'       => $stats['user_count'],
                            'prettyValue' => pretty_number_format($stats['user_count'], $decimalPlaces),
                        ],
                        'commentPostCount' => [
                            'label'       => $this->translator->trans('fof-forum-stats-widget.forum.widget.stats.comment_post_count'),
                            'icon'        => 'far fa-comment-dots',
                            'value'       => $stats['comment_post_count'],
                            'prettyValue' => pretty_number_format($stats['comment_post_count'], $decimalPlaces),
                        ],
                    ];
                }),
        ];
    }
}
