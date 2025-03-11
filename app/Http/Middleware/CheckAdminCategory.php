<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckAdminCategory
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check()) {
            if (Auth::user()->category == 'admin') {
                return $next($request);
            }
            return redirect()->route('cms-page');
        }
        return redirect()->route('cms-admin-login'); // Redirect to the login page if not authenticated
    }
}
