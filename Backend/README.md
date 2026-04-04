# Backend API Documentation

## `POST /users/register`

Registers a new user in the system.

### Description

This endpoint accepts user registration data and creates a new user account. It validates the request body to ensure required fields are present and formatted correctly.

### Request URL

`POST /users/register`

### Request Body

The request body must be sent as JSON with the following structure:

```json
{
  "fullname": {
    "first": "John",
    "last": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Field Requirements

- `fullname.first`: string, minimum 3 characters
- `fullname.last`: string
- `email`: valid email address
- `password`: string, minimum 6 characters

### Success Response

- Status code: `201 Created`
- Response body:

```json
{
  "user": {
    "_id": "...",
    "fullname": {
      "first": "John",
      "last": "Doe"
    },
    "email": "john.doe@example.com",
    "createdAt": "...",
    "updatedAt": "..."
  },
  "token": "<jwt-token>"
}
```

### Validation Error Response

- Status code: `400 Bad Request`
- Response body:

```json
{
  "errors": [
    {
      "msg": "invalid email address",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Notes

- Passwords are hashed before saving.
- A JSON Web Token (JWT) is returned after successful registration.
- Ensure `Content-Type: application/json` is set in the request headers.
