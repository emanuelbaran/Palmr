/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * 🌴 Palmr. API
 * API documentation for Palmr file sharing system
 * OpenAPI spec version: 1.0.0
 */

export type AddRecipients200ShareFilesItem = {
  /** The file ID */
  id: string;
  /** The file name */
  name: string;
  /**
   * The file description
   * @nullable
   */
  description: string | null;
  /** The file extension */
  extension: string;
  /** The file size */
  size: string;
  /** The file object name */
  objectName: string;
  /** The user ID */
  userId: string;
  /** The file creation date */
  createdAt: string;
  /** The file update date */
  updatedAt: string;
};
