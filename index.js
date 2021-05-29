$(function(){
    let problem = '';

    $('#h2-solution').text('_');

    $('.btn-number').on('click', (ele) => {
        problem += ele.currentTarget.innerText;
        $('#h2-problem').text(problem);
        //console.log(problem);
    });

    $('.btn-operator').on('click', (ele) => {
        problem += ' ' + ele.currentTarget.innerText + ' ';
        $('#h2-problem').text(problem);
        //console.log(problem);
    });

    $('#btn-equals').on('click', (ele) => {
        expression = problem.replace('×', '*').replace('÷', '/');

        $('#h2-solution').text(math.evaluate(expression));
    });

    $('#btn-backspace').on('click', (ele) => {
        $('#h2-problem').text('|');
        $('#h2-solution').text('_');
    });

});

