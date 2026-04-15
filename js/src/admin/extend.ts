import app from 'flarum/admin/app';
import Extend from 'flarum/common/extenders';

export default [
  new Extend.Admin() //
    .setting(() => ({
      setting: 'fof-forum-stats-widget.decimal_places',
      type: 'number',
      label: app.translator.trans('fof-forum-stats-widget.admin.settings.decimal_places.label'),
      help: app.translator.trans('fof-forum-stats-widget.admin.settings.decimal_places.help'),
      min: 0,
      max: 2,
    })),
];
