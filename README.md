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

## Captain Routes

### `POST /captains/register`

Registers a new captain and returns a JWT token.

#### Request Body

```jsonc
{
  "fullname": {
    "first": "Jane",          // required, min 3 characters
    "last": "Doe"            // required
  },
  "email": "jane.doe@example.com", // required, valid email format
  "password": "securePassword123", // required, min 6 characters
  "vehicle": {
    "color": "black",         // required, min 3 characters
    "plate": "XYZ1234",       // required, min 3 characters
    "capacity": 4,              // required, integer >= 1
    "vehicleType": "car"      // required, one of [car, motorcycle, auto]
  }
}
```

#### Success Response

- Status code: `201 Created`
- Response body:

```json
{
  "token": "<jwt-token>",
  "captain": {
    "_id": "...",
    "fullname": {
      "first": "Jane",
      "last": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "black",
      "plate": "XYZ1234",
      "capacity": 4,
      "vehicleType": "car"
    },
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### `POST /captains/login`

Logs in an existing captain and returns a JWT token.

#### Request Body

```jsonc
{
  "email": "jane.doe@example.com", // required, valid email
  "password": "securePassword123"  // required, min 6 characters
}
```

#### Success Response

- Status code: `200 OK`
- Response body:

```json
{
  "token": "<jwt-token>",
  "captain": {
    "_id": "...",
    "fullname": {
      "first": "Jane",
      "last": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "black",
      "plate": "XYZ1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### `GET /captains/profile`

Returns the authenticated captain's profile.

#### Request

- Requires authentication via cookie `token` or `Authorization: Bearer <token>` header.

#### Success Response

- Status code: `200 OK`
- Response body:

```json
{
  "captain": {
    "_id": "...",
    "fullname": {
      "first": "Jane",
      "last": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "black",
      "plate": "XYZ1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### `GET /captains/logout`

Logs out the authenticated captain and invalidates the current token.

#### Request

- Requires authentication via cookie `token` or `Authorization: Bearer <token>` header.

#### Success Response

- Status code: `200 OK`
- Response body:

```json
{
  "message": "Logged out successfully"
}
```
