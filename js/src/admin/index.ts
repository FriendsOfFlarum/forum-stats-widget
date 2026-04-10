import app from 'flarum/admin/app';
import registerWidget from '../common/registerWidget';

app.initializers.add('fof/forum-stats-widget', () => {
  registerWidget();
});
