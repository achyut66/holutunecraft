<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Product name
            $table->text('description'); // Product description
            $table->string('image'); // Product image path (stored in public)
            $table->decimal('price', 10, 2); // Product price (stored as a decimal)
            $table->string('currency', 5); // Currency (e.g. $, €, etc.)
            $table->string('sound'); // Sound file path (stored in public)
            $table->timestamps(); // Created and updated timestamps
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
