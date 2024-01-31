/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function MainContentSection(props) {
  return (
    <div className="container mx-auto p-4">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <article className="bg-white p-4 shadow rounded mb-4">
            <div className="flex items-center mb-4">
              <div className="rounded-full h-12 w-12">
                <img
                  className="rounded-full"
                  src="https://picsum.photos/200"
                  alt="Profile picture"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    objectPosition: "center",
                  }}
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">Ryan L</p>
                <p className="text-xs text-gray-500">The world's most powerful superhero </p>
              </div>
            </div>

            <img
              className="post-image mb-4"
              src="https://picsum.photos/700"
              alt="Profile picture"
              style={{
                objectFit: "cover",
                width: "100%",
                objectPosition: "center",
              }}
            />

            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
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
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
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
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
            <div className="flex justify-between">
              <button className="text-gray-500">Like</button>
              <button className="text-gray-500">Comment</button>
              <button className="text-gray-500">Share</button>
            </div>
          </article>
        </div>
        <aside className="hidden md:block md:col-span-1">
          <div class="h-96 w-full bg-white rounded shadow-md p-4 ">
            <h1>
              Additional bull-shit content like trends or suggestions placed
              here
            </h1>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default MainContentSection;
