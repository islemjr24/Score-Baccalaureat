function dem(ch){
    info=[3,3,3,2,1,1,1,1,1,1];
    math=[4,4,1,1,1,1,1,1,1,1];
    if(ch=="info"){
        i=0
        s=0
        c=0
        while (i < info.length){
            if(i==info.length-1){
                if(Number(document.getElementById("z"+String(i)).value)>10){
                    s=s+(Number(document.getElementById("z"+String(i)).value)*info[i])
                    c=c+info[i]
                    i++
                }
            }
            else{
                s=s+(Number(document.getElementById("z"+String(i)).value)*info[i])
                c=c+info[i]
                i++
            }
        }
        moyenne=s/c
        document.getElementById("moyenne").value=moyenne.toFixed(2)


    }
}
