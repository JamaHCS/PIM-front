/**
 * @enum HttpCode
 *
 * Represents the standard HTTP codes and status responses.
 * This enum categorizes the different status codes used in HTTP responses, ranging from success to client and server errors.
 */
export enum HttpCode {
  // 2xx: Success
  /**
   * @property {number} OK
   * The request has succeeded.
   */
  OK = 200,

  /**
   * @property {number} Created
   * The request has been fulfilled and resulted in a new resource being created.
   */
  Created = 201,

  /**
   * @property {number} Accepted
   * The request has been accepted for processing, but the processing has not been completed.
   */
  Accepted = 202,

  /**
   * @property {number} NonAuthoritativeInformation
   * The server successfully processed the request, but is returning information that may be from another source.
   */
  NonAuthoritativeInformation = 203,

  /**
   * @property {number} NoContent
   * The server successfully processed the request and is not returning any content.
   */
  NoContent = 204,

  /**
   * @property {number} ResetContent
   * The server successfully processed the request, but requires the requester to reset the document view.
   */
  ResetContent = 205,

  /**
   * @property {number} PartialContent
   * The server is delivering only part of the resource due to a range header sent by the client.
   */
  PartialContent = 206,

  /**
   * @property {number} MultiStatus
   * The message body that follows is an XML message and can contain a number of separate response codes.
   */
  MultiStatus = 207,

  /**
   * @property {number} AlreadyReported
   * The members of a DAV binding have already been enumerated in a previous reply to this request.
   */
  AlreadyReported = 208,

  /**
   * @property {number} IMUsed
   * The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
   */
  IMUsed = 226,

  // 4xx: Client Errors
  /**
   * @property {number} BadRequest
   * The server cannot or will not process the request due to a client error.
   */
  BadRequest = 400,

  /**
   * @property {number} Unauthorized
   * The request requires user authentication.
   */
  Unauthorized = 401,

  /**
   * @property {number} PaymentRequired
   * Reserved for future use. Intended for digital payment systems.
   */
  PaymentRequired = 402,

  /**
   * @property {number} Forbidden
   * The server understood the request but refuses to authorize it.
   */
  Forbidden = 403,

  /**
   * @property {number} NotFound
   * The requested resource could not be found on the server.
   */
  NotFound = 404,

  /**
   * @property {number} MethodNotAllowed
   * The request method is not supported for the requested resource.
   */
  MethodNotAllowed = 405,

  /**
   * @property {number} NotAcceptable
   * The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.
   */
  NotAcceptable = 406,

  /**
   * @property {number} ProxyAuthenticationRequired
   * The client must authenticate itself with a proxy.
   */
  ProxyAuthenticationRequired = 407,

  /**
   * @property {number} RequestTimeout
   * The server timed out waiting for the request.
   */
  RequestTimeout = 408,

  /**
   * @property {number} ConflictOrDuplicate
   * The request could not be processed because of a conflict or duplicate action.
   */
  ConflictOrDuplicate = 409,

  /**
   * @property {number} Gone
   * The resource requested is no longer available and will not be available again.
   */
  Gone = 410,

  /**
   * @property {number} LengthRequired
   * The request did not specify the length of its content, which is required by the requested resource.
   */
  LengthRequired = 411,

  /**
   * @property {number} PreconditionFailed
   * The server does not meet one of the preconditions that the requester put on the request.
   */
  PreconditionFailed = 412,

  /**
   * @property {number} PayloadTooLarge
   * The request is larger than the server is willing or able to process.
   */
  PayloadTooLarge = 413,

  /**
   * @property {number} URITooLong
   * The URI provided was too long for the server to process.
   */
  URITooLong = 414,

  /**
   * @property {number} UnsupportedMediaType
   * The request entity has a media type which the server or resource does not support.
   */
  UnsupportedMediaType = 415,

  /**
   * @property {number} RangeNotSatisfiable
   * The client has asked for a portion of the file, but the server cannot supply that portion.
   */
  RangeNotSatisfiable = 416,

  /**
   * @property {number} ExpectationFailed
   * The server cannot meet the requirements of the Expect request-header field.
   */
  ExpectationFailed = 417,

  /**
   * @property {number} IAmATeapot
   * The server refuses to brew coffee because it is, permanently, a teapot.
   */
  IAmATeapot = 418, // Fun Easter egg :)

  /**
   * @property {number} MisdirectedRequest
   * The server is not able to produce a response for this request.
   */
  MisdirectedRequest = 421,

  /**
   * @property {number} UnprocessableEntity
   * The request was well-formed but was unable to be followed due to semantic errors.
   */
  UnprocessableEntity = 422,

  /**
   * @property {number} Locked
   * The resource that is being accessed is locked.
   */
  Locked = 423,

  /**
   * @property {number} FailedDependency
   * The request failed because it depended on another request and that request failed.
   */
  FailedDependency = 424,

  /**
   * @property {number} TooEarly
   * The server is unwilling to process a request that might be replayed.
   */
  TooEarly = 425,

  /**
   * @property {number} UpgradeRequired
   * The client should switch to a different protocol.
   */
  UpgradeRequired = 426,

  /**
   * @property {number} PreconditionRequired
   * The server requires the request to be conditional.
   */
  PreconditionRequired = 428,

  /**
   * @property {number} TooManyRequests
   * The user has sent too many requests in a given amount of time.
   */
  TooManyRequests = 429,

  // 5xx: Server Errors
  /**
   * @property {number} InternalServerError
   * The server encountered an unexpected condition that prevented it from fulfilling the request.
   */
  InternalServerError = 500,

  /**
   * @property {number} NotImplemented
   * The server does not support the functionality required to fulfill the request.
   */
  NotImplemented = 501,

  /**
   * @property {number} BadGateway
   * The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
   */
  BadGateway = 502,

  /**
   * @property {number} ServiceUnavailable
   * The server is currently unable to handle the request due to temporary overloading or maintenance of the server.
   */
  ServiceUnavailable = 503,

  /**
   * @property {number} GatewayTimeout
   * The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.
   */
  GatewayTimeout = 504,

  /**
   * @property {number} HTTPVersionNotSupported
   * The server does not support the HTTP protocol version used in the request.
   */
  HTTPVersionNotSupported = 505,

  /**
   * @property {number} LoopDetected
   * The server detected an infinite loop while processing a request.
   */
  LoopDetected = 508,
}
