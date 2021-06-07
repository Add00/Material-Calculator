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
        //console.log(problem);
    });

    $('#btn-clear').on('click', (ele) => {
        problem = '';
        $('#h2-problem').text('|');
        $('#h2-solution').text('_');
        //console.log(problem);
    });

    $('#btn-delete').on('click', (ele) => {
        problem = problem.slice(0, -1);
        $('#h2-problem').text(problem);
        $('#h2-solution').text('_');
        //console.log(problem);
    });

    $('#btn-copy').on('click', (ele) => {
       navigator.clipboard.writeText(math.evaluate(problem));
       M.toast({html: 'copied to clipboard', classes: 'rounded', displayLength: 1000});
    });

});

