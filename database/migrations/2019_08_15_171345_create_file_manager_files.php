<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFileManagerFiles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('file_manager_files', function (Blueprint $table) {

            $table->bigIncrements('id');
            $table->integer('unique_id');
            $table->integer('folder_id')->default(0);

            $table->text('thumbnail')->nullable();
            $table->text('name')->nullable();
            $table->text('basename')->nullable();

            $table->text('mimetype')->nullable();
            $table->text('filesize')->nullable();

            $table->text('width')->nullable();
            $table->text('height')->nullable();

            $table->text('type')->nullable();

            $table->softDeletes();
            $table->timestamps();
        });

        Schema::table('file_manager_files', function($table) {
            $table->text('width');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('file_manager_files');

        Schema::table('file_manager_files', function($table) {
            $table->dropColumn('width');
        });
    }
}
