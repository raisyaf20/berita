<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $berita = new NewsCollection(News::Paginate(5));
        return Inertia::render('Homepage', [
            "title" => 'Berita hari ini',
            "news" => $berita,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $news = new News();
        $news->title = $request->title;
        $news->description = $request->description;
        $news->category = $request->category;
        $news->author = auth()->user()->email;

        $news->save();
        return redirect()->back()->with('message', "berita berhasil di buat");
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {

        $myNews = $news::where("author", auth()->user()->email)->get();
        return Inertia::render(
            "Dashboard",
            ['myNews' => $myNews]

        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news, Request $request)
    {
        // $edit = News::where('author', auth()->user()->email)->update([
        // ]);
        return Inertia::render('EditNews', [
            "update", $news->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $news)
    {
        DB::table('news')
            ->where('id', $news->id)
            ->update([
                'title' => $news->title,
                'description' => $news->description,
                'category' => $news->category,
            ]);
        return to_route('dashboard')->with('message', 'Update Berita berhasil');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $news)
    {
        $news = News::find($news->id);
        $news->delete();
        return redirect()->back();
    }
}
