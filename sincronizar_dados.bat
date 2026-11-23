@echo off
title Sincronizador de Dados - Calendario de Eventos
cd /d "%~dp0"
node sincronizar_dados.js
echo Pressione qualquer tecla para fechar esta janela...
pause >nul
