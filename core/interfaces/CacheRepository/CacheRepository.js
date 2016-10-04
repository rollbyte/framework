/**
 * Created by inkz on 10/3/16.
 */
'use strict';

/**
 *
 * @constructor
 */
function CacheRepository() {

  /**
   *
   * @param key
   * @returns {*}
   */
  this.get = function(key) {
    return this._get(key);
  };

  /**
   *
   * @param key
   * @param value
   * @returns {*}
   */
  this.set = function(key, value) {
    return this._set(key,value);
  };

}

module.exports = CacheRepository;
