# OpenSuite ERP - UI

**OpenSuite ERP** es una plataforma modular de **gestión empresarial multiempresa**, diseñada para centralizar y automatizar procesos administrativos, financieros y operativos en organizaciones con múltiples filiales o sucursales.

Este repositorio contiene la **API REST** desarrollada en **ASP.NET Core (.NET 9)** que sirve como backend del sistema.

---

## 📌 Descripción del proyecto

El objetivo de **OpenSuite ERP UI** es proporcionar un frontend robusto, escalable y seguro para soportar las operaciones de un **ERP multiempresa**, facilitando:

- La **gestión de múltiples empresas y sucursales** bajo un mismo sistema.
- La integración con distintos módulos (finanzas, administración, contabilidad, compras, almacén, préstamos, RRHH, bla bla bla).
- Una arquitectura en capas para facilitar mantenimiento, escalabilidad y despliegue en la nube (AWS o entornos locales).

---

## 🏗️ Arquitectura

El sistema sigue una **arquitectura en capas**:

- **src** → Archivos principales del proyectos.
- **layout** → interfaz principal de la aplicacion web.
- **shared** componentes reutilizables.
- **features** Modulos de sistema ERP.
- **models** entidades mapeadas.



## 🚀 Tecnologías

- **Angular 20**
- **JWT** (autenticación y autorización)

---

## ⚙️ Configuración y ejecución

### 1. Clonar repositorio
```bash
git clone https://github.com/EdwinCruz13/opensuite-ui.git
cd opensuite-ui
npm install
ng serve -o
