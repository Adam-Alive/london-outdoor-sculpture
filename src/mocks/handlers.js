import { rest } from "msw";

const baseURL = 'https://sculpture-drf-api-2aa8ed66624d.herokuapp.com/';

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        "id": 2,
        "owner": "Blake",
        "created_at": "02 Nov 2024",
        "updated_at": "03 Nov 2024",
        "name": "",
        "content": "",
        "image": "https://res.cloudinary.com/dsrn5pwer/image/upload/v1/media/images/blake_azryng",
        "is_owner": false,
        "following_id": null,
        "posts_count": 3,
        "followers_count": 3,
        "following_count": 5
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];