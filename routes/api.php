<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductDetailsController;
use App\Models\Productdetails;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/cart', [CartController::class, 'addToCart']);
Route::get('/cart/count', [CartController::class, 'getCartCount']);
Route::get('/allcart', [CartController::class, 'getAllCart']);
Route::get('/products', [ProductDetailsController::class, 'index']);
Route::get('/category', [ProductDetailsController::class, 'get_by_category']);

// cms 
Route::post('/store', [ProductDetailsController::class, 'store']);
Route::delete('/products/{Id}', [ProductDetailsController::class, 'destroy']);
Route::put('/products-update/{Id}', [ProductDetailsController::class, 'update']);


