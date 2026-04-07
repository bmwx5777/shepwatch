"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "shepards-wishlist";

export function useWishlist() {
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  }, []);

  const saveWishlist = (items: string[]) => {
    setWishlist(items);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  };

  const toggleWishlist = (slug: string) => {
    const exists = wishlist.includes(slug);

    if (exists) {
      saveWishlist(wishlist.filter((item) => item !== slug));
    } else {
      saveWishlist([...wishlist, slug]);
    }
  };

  const isInWishlist = (slug: string) => wishlist.includes(slug);

  return {
    wishlist,
    wishlistCount: wishlist.length,
    toggleWishlist,
    isInWishlist,
  };
}