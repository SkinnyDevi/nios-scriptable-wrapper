import NIOSEnvironment from "./nios-wrapper/Environment.js";

import FilesystemWrapper, {
  FakeDirectory,
  FakeFile,
} from "./nios-wrapper/Wrappers/FilesystemWrapper.js";

// --- NIOS ENVIRONMENT ---
export default NIOSEnvironment;

// --- FAKERS ---
export { FilesystemWrapper, FakeDirectory, FakeFile };
