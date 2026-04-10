/// <reference types="mithril" />
import Widget from 'flarum/extensions/fof-forum-widgets-core/common/components/Widget';
export default class ForumStatsWidgetWidget extends Widget {
    className(): string;
    icon(): string;
    title(): string;
    content(): JSX.Element;
}
