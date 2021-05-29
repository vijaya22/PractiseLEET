/**
 * @param {string} s
 * @return {string}
 */
var toLowerCaseAnother = function(s) {
   return s.split('').map(c=>c.charCodeAt()>=65 && c.charCodeAt()<=90?String.fromCharCode(c.charCodeAt()+32):c).join('');
    
};
