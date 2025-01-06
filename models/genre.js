const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// 定义 Genre 模式, 字段包括 name，类型为 String，必填，最小长度 3，最大长度 100
const GenreSchema = new Schema({
    name: { type: String, required: true, min: 3, max: 100 },
    });


// 虚拟属性'url'：Genre URL

GenreSchema.virtual("url").get(function () {
    return "/catalog/genre/" + this._id;
});

// 导出 Genre 模型

module.exports = mongoose.model("Genre", GenreSchema);