import printTree from "../src/index/generateTrees/printTree";

const filePathsList = [
  ["foo", "bar", "baz", "qux"],
  ["foo", "foo/bar", "foo/bar/baz", "foo/bar/baz/qux"],
  ["foo", "foo/bar", "foo/baz", "foo/qux"],
  [
    "foo",
    "foo/bar/a",
    "foo/bar/b",
    "foo/baz/a",
    "foo/baz/b",
    "foo/qux/a",
    "foo/qux/b",
  ],
  ["foo", "foo/bar", "foo/bar/baz", "foo/bar/baz/qux", "qux"],
  ["foo.ts", "bar", "bar/foo", "bar/foo/foo.ts", "bar/bar.ts"],
];

describe("printTree-demo", () => {
 
    it("should visualize tree1", () => {
      expect("\n" + printTree(filePathsList[0])).toMatchSnapshot();
    });
    it("should visualize tree2", () => {
      expect("\n" + printTree(filePathsList[1])).toMatchSnapshot();
    });
    it("should visualize tree3", () => {
      expect("\n" + printTree(filePathsList[2])).toMatchSnapshot();
    });
    it("should visualize tree4", () => {
      expect("\n" + printTree(filePathsList[3])).toMatchSnapshot();
    });
    it("should visualize tree5", () => {
      expect("\n" + printTree(filePathsList[4])).toMatchSnapshot();
    });
    it("should visualize tree6", () => {
      expect("\n" + printTree(filePathsList[5])).toMatchSnapshot();
    });
});

