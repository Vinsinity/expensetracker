const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps();

mix.scripts([
    'node_modules/admin-lte/plugins/jquery/jquery.min.js',
    'node_modules/admin-lte/dist/js/adminlte.min.js',
    'node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js',
    'node_modules/admin-lte/plugins/datatables/jquery.dataTables.min.js',
    'node_modules/admin-lte/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js',
    'node_modules/admin-lte/plugins/datatables-responsive/js/dataTables.responsive.min.js',
    'node_modules/admin-lte/plugins/datatables-responsive/js/responsive.bootstrap4.min.js',

], 'public/js/all.min.js');

mix.copy('node_modules/admin-lte/dist/img','public/dist/img');
