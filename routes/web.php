<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductDetailsController;
use App\Http\Controllers\FacebookWebhookController;

use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');  
Route::get('/reviews', function () {
    return Inertia::render('Reviews');
})->name('reviews'); 
Route::get('/blog', function () {
    return Inertia::render('Blog');
})->name('blog');
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');
Route::get("/new", function(){
    return Inertia::render('New');
})->name('new');
Route::get("/sale", function(){
    return Inertia::render('Sale');
})->name('sale');
Route::get("/cart", function(){
    return Inertia::render('Cart');
})->name('cart');
Route::get("/terms", function(){
    return Inertia::render('Termsofservices');
})->name('company/terms');
Route::get("trackmyorder", function(){
    return Inertia::render('Trackmyorder');
})->name('trackmyorder');
Route::get("faq", function(){
    return Inertia::render('Faq');
})->name('faq');
Route::get("wholesale", function(){
    return Inertia::render('Wholesale');
})->name('wholesale');
Route::get("shipping", function(){
    return Inertia::render('Shipping');
})->name('shipping');
Route::get("refund", function(){
    return Inertia::render('Refund');
})->name('refund');
Route::get("ourteam", function(){
    return Inertia::render('Ourteam');
})->name('ourteam');
Route::get("wishlist", function(){
    return Inertia::render('Wishlist');
})->name('wishlist');
Route::get("giftcard", function(){
    return Inertia::render('Giftcard');
})->name('giftcard');

// products details
Route::get('/products/{id}', [ProductDetailsController::class, 'show']);

// for cms
Route::get('cms-admin-login', function() {
    return Inertia::render('Administrator/Administrator'); // This is your login page
})->name('cms-admin-login')
  ->middleware('guest');  // Ensure only guests can access this route
Route::get('cms-page', function() {
    return Inertia::render('Administrator/AdminCms'); // This is your CMS page
})->middleware('admin')->name('cms-page');
Route::get('cms-products',function(){
    return Inertia::render('Administrator/Ourproducts');
})->name('cms-products');
Route::get('/products-edit/{id}', [ProductDetailsController::class,'edit']); 
// messenger webhook

Route::get('/facebook/webhook', [FacebookWebhookController::class, 'verify']); // Verification
Route::post('/facebook/webhook', [FacebookWebhookController::class, 'handle']); // Handle messages

require __DIR__.'/auth.php';
