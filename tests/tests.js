var assert = chai.assert;

suite('Comma Separated Values (CSV)', function() {
    setup(function(){
      if (typeof __html__ !== 'undefined') {
          document.body.innerHTML = __html__['tests/index.html'];
          original = document.getElementById('original');
          result = document.getElementById('finaltable');
      }
    });
    test('1,2,3 = 1 2 3', function() {
        original.value = "1,2,3";
        calculate();
        assert.deepEqual(result.innerHTML,'\n<tbody><tr>                    <td>1</td>                                  <td>2</td>                                  <td>3</td>              </tr>\n</tbody>');
    });
    test('1,2,3 \\n 4,5,6 = 1 2 3 \\n 4 5 6' ,function() {
       	original.value = "1,2,3\n4,5,6";
        calculate();
        assert.deepEqual(result.innerHTML,'\n<tbody><tr>                    <td>1</td>                                  <td>2</td>                                  <td>3</td>              </tr>\n<tr>                    <td>4</td>                                  <td>5</td>                                  <td>6</td>              </tr>\n</tbody>');
    });
    test('3,2 \\n 3,2,1 = 3 2 \\n 3 2 1', function() {
        original.value = "3,2\n3,2,1";
        calculate();
        assert.deepEqual(result.innerHTML,'\n<tbody><tr>                    <td>3</td>                                  <td>2</td>              </tr>\n<tr class="error">                    <td>3</td>                                  <td>2</td>                                  <td>1</td>              </tr>\n</tbody>');
    });
});
