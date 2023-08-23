"use strict";

(() => {
    const express = require("express");
    const router = express.Router();

    const register = require('./registerusers');
   
    router.use('/register', register);
  
  

    
    module.exports = router;
})();