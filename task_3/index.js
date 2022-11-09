function drawChess(){
    let container=document.querySelector('.container');
    let mainBlock=document.querySelector('.main');
    let letters=document.querySelector('.letters');
    let block;
    let letter;
    let flag=true;
    let figure = { 
            0 : ['-263px -19px', '-484px -22px', '-372px -17px', '-150px -16px', '-38px -16px','-372px -17px', '-484px -22px','-263px -19px'],
            1 : ['-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px','-595px -19px', '-595px -19px','-595px -19px'],
            6 : ['-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px','-595px -116px', '-595px -116px','-595px -116px'],
            7 : ['-263px -116px', '-484px -116px', '-372px -116px', '-38px -116px', '-150px -116px','-372px -116px', '-484px -116px','-263px -116px'],
        };
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
        if(j==0)flag=!flag;
        block=document.createElement('div');
        if(flag) block.className='block black';
        else block.className='block white';
        if(figure[i]!==undefined&&figure[i][j]!==undefined){
            block.style.backgroundImage='url(./img/сhess_symbols_set_.png)'
            block.style.backgroundPosition=figure[i][j];
        }
        container.appendChild(block);
        flag=!flag;
        }
    }
    for(let i=1;i<9;i++){
        block=document.createElement('span');
        block.className='block num ';
        block.innerHTML=`${i}`;
        mainBlock.appendChild(block);
    }
    for (let i=65; i<73; i++){
        letter=document.createElement('span');
        letter.className=' latter';
        letter.innerHTML=`${String.fromCharCode(i)}`;
        letters.append(letter);
    }
    }
    drawChess();