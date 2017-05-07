let bettingName ='';
if (loseList[i].bettingName === "big"){
    bettingName = "大";
}else if(loseList[i].bettingName === "small"){
    bettingName = "小";
}else if(loseList[i].bettingName === "single"){
    bettingName = "单";
}else if(loseList[i].bettingName === "double"){
    bettingName = "双";
}else if(loseList[i].bettingName === "bigSingle"){
    bettingName = "大单";
}else if(loseList[i].bettingName === "smallSingle"){
    bettingName = "小单";
}else if(loseList[i].bettingName === "bigDouble"){
    bettingName = "大双";
}else if(loseList[i].bettingName === "smallDouble"){
    bettingName = "小双";
}else if(loseList[i].bettingName === "maximum"){
    bettingName = "极大";
}else if(loseList[i].bettingName === "minimal"){
    bettingName = "极小";
}else if(loseList[i].bettingName === "leopard"){
    bettingName = "豹子";
}else if(loseList[i].bettingName === "sequence"){
    bettingName = "顺子";
}else if(loseList[i].bettingName === "pair"){
    bettingName = "对子";
}else if(loseList[i].bettingName === "point"){
    bettingName = "点数字";
}else {
    bettingName = "奇怪"+previousBettingRecord[i].bettingContents[j].bettingName;
}

loseList[i].winOrLose = true;
loseList[i].bettingName = bettingName;