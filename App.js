import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";

// Portfolio Component
export function Portfolio() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center">My Portfolio</h1>
      <section>
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-gray-700">I am a passionate developer specializing in modern web technologies.</p>
      </section>
    </div>
  );
}

// Job Board Component
export function JobBoard() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios.get("/api/jobs").then((res) => setJobs(res.data));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center">Job Board</h1>
      <section>
        <h2 className="text-2xl font-semibold">Job Listings</h2>
        {jobs.map((job) => (
          <Card key={job.id} className="mt-4">
            <CardContent>
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-700">{job.company} - {job.location}</p>
              <Button className="mt-2">Apply Now</Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}

// E-commerce Component
export function Ecommerce() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((res) => setProducts(res.data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center">E-commerce Store</h1>
      <section>
        <h2 className="text-2xl font-semibold">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <Card key={product.id} className="mt-4">
              <CardContent>
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-700">${product.price}</p>
                <Button className="mt-2" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

// Netflix Clone Component
export function NetflixClone() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=YOUR_API_KEY").then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center">Netflix Clone</h1>
      <section>
        <h2 className="text-2xl font-semibold">Trending Movies & Shows</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {movies.map((movie) => (
            <Card key={movie.id} className="mt-4">
              <CardContent>
                <h3 className="text-xl font-semibold">{movie.title || movie.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
