/// <reference types="mithril" />
import Widget, { WidgetAttrs } from 'flarum/extensions/fof-forum-widgets-core/common/components/Widget';
export default class ForumStatsWidgetWidget extends Widget<WidgetAttrs> {
    className(): string;
    icon(): string;
    title(): string;
    content(): JSX.Element;
}
