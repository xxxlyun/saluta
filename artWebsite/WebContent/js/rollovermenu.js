function RollOverControl() {
    var cfg, data;
    var initParms = function (config, jsonData) {
        cfg = config;
        data = jsonData;
    };
    var rollOver = function () {
        buildRollOver();
        ajustMenu();
    };

    function ajustMenu() {
        var ul = document.getElementById(cfg.rollOverID);
        var rowNum = Math.floor(ul.offsetHeight /cfg.cellHeight);
        var tabList = ul.children;
        if (tabList != null && tabList.length > 0) {
            for (var n = 0; n < tabList.length; n++) {
                var detailList = tabList[n].children;
                if (detailList != null && detailList.length > 0) {
                    for (var j = 0; j < detailList.length; j++) {
                        var menu = detailList[j];
                        if (menu.getAttribute('class') == cfg.menuClass) {
                            menu.style.height = ul.offsetHeight + 'px';
                            menu.style.position = 'absolute';
                            menu.style.top = 0;
//                            menu.style.left = (ul.offsetLeft + ul.offsetWidth) + 'px';
                            menu.style.left = ( ul.offsetWidth) + 'px';
                            menu.style.zIndex = '999';
                            var liList;
                            if (menu.children != null
                                && menu.children.length > 0
                                && menu.children[0] != null
                                && menu.children[0].children.length > 0) {
                                liList = menu.children[0].children;
                            }
                            var newUl;
                            if (liList != null && liList.length > 0) {
                                newUl = groupCells(liList[0], rowNum);
                            }

                            if (menu.children != null
                                 && menu.children.length > 0) {
                                menu.removeChild(menu.children[0]);
                            }

                            if (newUl != null) {
                                if (newUl.children != null && newUl.children.length > 0) {
                                    menu.style.width = (newUl.children.length * cfg.cellWidth) + 'px';
                                }
                                menu.appendChild(newUl);
                            }
                        }
                    }
                }
            }
        }
    }

    function groupCells(oLi, rowNum) {
        var ul = document.createElement('ul');
        var aList = oLi.children;
        if (aList != null && aList.length > 0) {
            var li = document.createElement('li');
            for (var m = 0; m < aList.length; m++) {
                if (li.children.length == rowNum) {
                    ul.appendChild(li);
                    li = document.createElement('li');
                }

                aList[m].style.width = cfg.cellWidth + 'px';
                aList[m].style.padding = 0;
                li.appendChild(aList[m].cloneNode(true));

                if ((m + 1) == aList.length) {
                    ul.appendChild(li);
                }
            }
        }

        return ul;
    }

    function buildRollOver() {
        if (cfg != null && cfg.rollOverID != null) {
            var ul = document.getElementById(cfg.rollOverID);
            if (data && data != null && data.tabs != null && data.tabs.length > 0) {
                for (var k = 0; k < data.tabs.length; k++) {
                    var tab = data.tabs[k];
                    if (tab != null) {
                        var li = buildSingleTab(tab);
                        if (li != null) {
                            ul.appendChild(li);
                        }
                    }
                }
            }
        }
    }

    function buildSingleTab(tab) {
        var li = document.createElement('li');
        if (tab != null) {
            var strong = document.createElement('strong');
            var a = document.createElement('a');
            a.setAttribute('href', tab.tabLink);
            var txt = document.createTextNode(tab.tabName);
            a.appendChild(txt);
            strong.appendChild(a);
            li.appendChild(strong);
            if (tab.cells != null) {
                var cells = buildSingleMenu(tab.cells);
                if (cells != null) {
                    li.appendChild(cells);
                }
            }
        }

        if(window.addEventListener){ // Mozilla, Netscape, Firefox 
            li.addEventListener('mouseover', function () {
                var childs = this.children;
                if (childs != null && childs.length > 0) {
                    var menu = childs[childs.length - 1];
                    menu.style.display = 'block';
                }
            }, false); 
            li.addEventListener('mouseout', function () {
                var childs = this.children;
                if (childs != null && childs.length > 0) {
                    var menu = childs[childs.length - 1];
                    menu.style.display = 'none';
                }
            }, false); 
        } else { // IE 
            li.attachEvent('onmouseover', function () {
                var childs = this.children;
                if (childs != null && childs.length > 0) {
                    var menu = childs[childs.length - 1];
                    menu.style.display = 'block';
                }
            }); 
            li.attachEvent('onmouseout', function () {
                var childs = this.children;
                if (childs != null && childs.length > 0) {
                    var menu = childs[childs.length - 1];
                    menu.style.display = 'none';
                }
            });
        } 

        return li;
    };

    function buildSingleMenu(cells) {
        var div = document.createElement('div');
        if (cfg.menuClass != null) {
            div.setAttribute('class', cfg.menuClass);
        }

        var ul = document.createElement('ul');
        var li = document.createElement('li');
        if (cells != null && cells.length > 0) {
            for (var i = 0; i < cells.length; i++) {
                var cell = cells[i];
                if (cell != null) {

                    var a = document.createElement('a');
                    a.style.width = cfg.cellWidth;
                    a.style.height = cfg.cellHeight;
                    a.setAttribute('href', cell.cellLink);
                    var txt = document.createTextNode(cell.cellName);
                    a.appendChild(txt);
                    li.appendChild(a);
                }
            }
        }

        ul.appendChild(li);
        div.appendChild(ul);
        return div;
    }

    return {
        InitParms: initParms,
        RollOver: rollOver
    };
};