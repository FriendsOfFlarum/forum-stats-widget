import app from 'flarum/common/app';
import Widgets from 'flarum/extensions/fof-forum-widgets-core/common/extend/Widgets';

import ForumStatsWidget from './components/ForumStatsWidget';

export default function () {
  new Widgets()
    .add({
      key: 'forumStats',
      component: ForumStatsWidget,
      isDisabled: () => !app.forum.attribute('fof-forum-stats-widget.stats'),
      isUnique: true,
      placement: 'end',
      position: 2,
    })
    .extend(app, 'fof-forum-stats-widget');
}
