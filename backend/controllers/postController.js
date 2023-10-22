import asyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';

const getPosts = asyncHandler(async (req, res) => {
  const data = { message: 'Returns a list of posts.' };
  res.json(data);
});

const getPostById = asyncHandler(async (req, res) => {
  // Code Implementation Part
});

const deletePost = asyncHandler(async (req, res) => {
  // Code Implementation Part
});

const createPost = asyncHandler(async (req, res) => {
  // Code Implementation Part
});

const updatePost = asyncHandler(async (req, res) => {
  // Code Implementation Part
});

// createPostComment, sendPostLike, getTopPosts, increasePostView 함수들을 제거했습니다.

export { getPosts, getPostById, deletePost, createPost, updatePost };
