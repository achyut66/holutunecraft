<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Productdetails extends Model
{
    use HasFactory;
    protected $table = "products";
    protected $fillable = [
        'name',
        'detail_info',
        'description',
        'price',
        'currency', 
        'category',
        'image',      
        'sound',
        'weight',   
        'diameter',  
        'd_unit',     
        'discount_percent',    
        'quantity', 
        'q_unit', 
        'flag',    
    ];
    protected $casts = [
        'price' => 'decimal:2', 
    ];
}
