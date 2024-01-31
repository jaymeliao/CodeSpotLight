import React from 'react';

function MainContentSection(props) {
    return (
        <div className='container mx-auto p-4'>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <article className="bg-white p-4 shadow rounded mb-4">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-gray-300 h-12 w-12"></div>
              <div className="ml-4">
                <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 w-24 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="post-image mb-4"></div>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <div className="flex justify-between">
              <button className="text-gray-500">Like</button>
              <button className="text-gray-500">Comment</button>
              <button className="text-gray-500">Share</button>
            </div>
          </article>
          <article className="bg-white p-4 shadow rounded mb-4">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-gray-300 h-12 w-12"></div>
              <div className="ml-4">
                <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 w-24 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="post-image mb-4"></div>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <div className="flex justify-between">
              <button className="text-gray-500">Like</button>
              <button className="text-gray-500">Comment</button>
              <button className="text-gray-500">Share</button>
            </div>
          </article>
          <article className="bg-white p-4 shadow rounded mb-4">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-gray-300 h-12 w-12"></div>
              <div className="ml-4">
                <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 w-24 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="post-image mb-4"></div>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <div className="flex justify-between">
              <button className="text-gray-500">Like</button>
              <button className="text-gray-500">Comment</button>
              <button className="text-gray-500">Share</button>
            </div>
          </article>
        
        </div>
        <aside className="md:col-span-1">
            <h1>Additional content like trends or suggestions can go herasfdasfdasdfsafdafsafdsafdsadfdsafsafsafsaffdasfafe</h1>
        </aside>
      </section>
      </div>
    );
}

export default MainContentSection;