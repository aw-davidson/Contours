const Sequelize = require('sequelize')
const db = require('../db')

const BlogPost = db.define('BlogPost', {
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  getterMethods: {
    getUrlTitle() {
      return encodeURIComponent(this.title.trim().join('_'))
    }
  }
})

module.exports = BlogPost;