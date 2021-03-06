/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/serviceMappers";
import * as Parameters from "../models/parameters";
import { StorageClientContext } from "../storageClientContext";

/** Class representing a Service. */
export class Service {
  private readonly client: StorageClientContext;

  /**
   * Create a Service.
   * @param {StorageClientContext} client Reference to the service client.
   */
  constructor(client: StorageClientContext) {
    this.client = client;
  }

  /**
   * List filesystems and their properties in given account.
   * @summary List FileSystems
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceListFileSystemsResponse>
   */
  listFileSystems(options?: Models.ServiceListFileSystemsOptionalParams): Promise<Models.ServiceListFileSystemsResponse>;
  /**
   * @param callback The callback
   */
  listFileSystems(callback: coreHttp.ServiceCallback<Models.FileSystemList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listFileSystems(options: Models.ServiceListFileSystemsOptionalParams, callback: coreHttp.ServiceCallback<Models.FileSystemList>): void;
  listFileSystems(options?: Models.ServiceListFileSystemsOptionalParams | coreHttp.ServiceCallback<Models.FileSystemList>, callback?: coreHttp.ServiceCallback<Models.FileSystemList>): Promise<Models.ServiceListFileSystemsResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listFileSystemsOperationSpec,
      callback) as Promise<Models.ServiceListFileSystemsResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const listFileSystemsOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.resource0,
    Parameters.prefix,
    Parameters.continuation,
    Parameters.maxResults,
    Parameters.timeout
  ],
  headerParameters: [
    Parameters.requestId,
    Parameters.version
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FileSystemList,
      headersMapper: Mappers.ServiceListFileSystemsHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ServiceListFileSystemsHeaders
    }
  },
  serializer
};
