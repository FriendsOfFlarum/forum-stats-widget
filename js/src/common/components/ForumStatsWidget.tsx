import app from 'flarum/common/app';
import Tooltip from 'flarum/common/components/Tooltip';
import Icon from 'flarum/common/components/Icon';
import Widget, { WidgetAttrs } from 'ext:fof/forum-widgets-core/common/components/Widget';
import extractText from 'flarum/common/utils/extractText';

type StatEntry = { label: string; icon: string; value: number; prettyValue: string };
type StatsData = Record<string, StatEntry>;

export default class ForumStatsWidgetWidget extends Widget<WidgetAttrs> {
  className(): string {
    return 'FoF-ForumStatsWidget';
  }

  icon(): string {
    return 'fas fa-chart-pie';
  }

  title(): string {
    return extractText(app.translator.trans('fof-forum-stats-widget.forum.widget.title'));
  }

  content() {
    const stats = app.forum.attribute('fof-forum-stats-widget.stats') as StatsData;

    return (
      <div className="FoF-ForumStatsWidget-grid">
        {Object.keys(stats).map((stat) => (
          <Tooltip text={stats[stat].label}>
            <span className="FoF-ForumStatsWidget-grid-item">
              <span className="FoF-ForumStatsWidget-grid-item-icon">
                <Icon name={stats[stat].icon} />
              </span>
              <span className="FoF-ForumStatsWidget-grid-item-value">{stats[stat].prettyValue}</span>
            </span>
          </Tooltip>
        ))}
      </div>
    );
  }
}
