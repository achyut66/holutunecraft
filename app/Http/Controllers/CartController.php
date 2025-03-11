<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;

class CartController extends Controller
{
    public function addToCart(Request $request)
    {
        $cart = new Cart();
        $cart->product_id = $request->input('id');
        $cart->product_name = $request->input('name');
        $cart->product_price = $request->input('price');
        $cart->product_currency = $request->input('currency');
        $cart->image = $request->input('image');
        $cart->save();

        session()->flash('message', 'Product added to cart');

        return response()->json(['message' => 'Product added to cart']);
    }

    public function getCartCount()
    {
        $count = Cart::count();
        return response()->json(['count' => $count]);
    }

    public function getAllCart()
    {
        $cart = Cart::all();  // Fetch all data from the cart table
        return response()->json(['cart' => $cart], 200); // Return data with status code 200
    }
    // public function deleteCart()
    // {
    //     Cart::truncate();
    //     return response()->json(['message' => 'Cart cleared']);
    // }
}