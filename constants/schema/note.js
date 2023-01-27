export default class Note {
  title = null;
  desc = null;
  content = null;
  author = null;
  tag = null;
  timestamp;
  constructor({ title, desc, content, author, tag }) {
    this.title = title;
    this.desc = desc;
    this.content = content;
    this.author = author;
    this.tag = tag;
    this.timestamp = Date.now();
  }
}
