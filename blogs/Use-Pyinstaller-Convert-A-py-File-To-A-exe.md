---
title: 利用 Pyinstaller 將 python 程式打包成一個可直接執行的 exe 檔
description: ' '
date: 2020-09-24 16:22:37
tags: [Python, Pyinstaller]
categories: Programming
---

若想將寫好的 Pyhton 程式移到其他沒安裝 python 環境的電腦或 Server 上使用，可以用 Pyinstaller 這個套件來將 pyhton 程式打包成一個 exe 檔，方便我們將程式直接讓其他人使用，或是用 Task Schedule 來設定批次執行。

### 安裝 Pyinstaller
我們直接用 pip 指令安裝 pyinstaller。
```powershell
$ pip install pyinstaller
```
<br />

### 進行打包

- 若我們要打包的程式檔為：test.py，在放 test.py 的資料夾中執行下面這個指令。
 - -F 的意思為將程式所有 test.py 中所有會用到的套件都打包進 exe 檔裡面。

```powershell
$ pyinstaller -F test.py
```

- 執行完後，我們會看到在資料夾中會多出二個資料夾 ( build 與 dist )，進去 dist 資料夾會看到 test.exe 檔案跟 test 的資料夾，而這個檔案就是我們所需要的 exe 檔。

<br />

### 常見問題
- 若我們在打包程式時，沒有加上 -F 的話。在程式執行完一樣會產生 build 與 dist 這二個資料夾。

```powershell
$ pyinstaller test.py
```

 - build 資料夾進去後會有一個 test 資料夾，再進去後會看到 test.exe 檔案。這個檔案是沒有辦法成功執行程式的。
 - 而 test 資料夾進去後也會有一個 test 資料夾，裡面的 test.exe 檔案可以執行。但會出現以下這個錯誤，表示我們在打包時沒有連程式會用到的套件一起包進去。

```powershell
Error loading Python DLL.
LoadLibrary: The specified module could not be found.
```
