import app from 'flarum/admin/app';
import registerWidget from '../common/registerWidget';

app.initializers.add('fof/forum-stats-widget', () => {
  registerWidget();

  app.extensionData.for('fof-forum-stats-widget').registerSetting({
    setting: 'fof-forum-stats-widget.decimal_places',
    type: 'number',
    label: app.translator.trans('fof-forum-stats-widget.admin.settings.decimal_places.label'),
    help: app.translator.trans('fof-forum-stats-widget.admin.settings.decimal_places.help'),
    min: 0,
    max: 2,
  });
});
