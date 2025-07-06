// API Endpoints
export const API_URLS = {
  GET_PROPERTIES: "/api/properties",        // Endpoint to fetch all property listings
  GET_PROPERTY_BY_ID: "/api/properties/:id", // Endpoint to fetch a specific property
  BOOK_PROPERTY: "/api/book",               // Endpoint to book a property
  CANCEL_BOOKING: "/api/cancel",            // Endpoint to cancel a booking
};

// UI Text
export const UI_TEXT = {
  BOOK_NOW: "Book Now",            // Button label
  VIEW_DETAILS: "View Details",    // Link or button text
  LOADING: "Loading...",           // Placeholder while waiting for data
  ERROR_MESSAGE: "Something went wrong. Please try again.", // General error message
  EMPTY_STATE: "No listings found.", // Message for when there are no items
};

// Configuration settings
export const CONFIG = {
  MAX_ITEMS_PER_PAGE: 10,       // Pagination limit
  DEFAULT_LANGUAGE: "en",       // Default app language
  CURRENCY_SYMBOL: "$",         // Default currency
  PROPERTY_IMAGE_PLACEHOLDER: "/assets/placeholder.jpg", // Fallback image
};

// Tag Labels (for badges like "Self CheckIn", "Top Villa")
export const TAGS = {
  SELF_CHECKIN: "Self CheckIn",
  FREE_RESCHEDULE: "Free Reschedule",
  TOP_VILLA: "Top Villa",
};