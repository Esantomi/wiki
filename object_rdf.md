---
title: RDF
tags:
  - Object
  - 시맨틱웹
  - 온톨로지
  - 컴퓨터언어
---

## 개요
**The Resource Description Framework (RDF)** is a framework for representing information in the Web.

## 상세
RDF has features that facilitate data merging even if the underlying schemas differ, and it specifically supports the evolution of schemas over time without requiring all the data consumers to be changed.

### Graph-based Data Model
![image](https://user-images.githubusercontent.com/61646760/168703157-2c0df1b7-2f07-4824-b89f-77001950f6fa.png)

The core structure of the abstract syntax is **a set of triples**, each consisting of a **subject**, a **predicate** and an **object**. A set of such triples is called an **RDF graph**. An RDF graph can be visualized as a node and directed-arc diagram, in which each triple is represented as a **node-arc-node link**.

## References
- [RDF 공식 문서 - W3C](https://www.w3.org/RDF/)
- [RDF 1.1 Concepts and Abstract Syntax](https://www.w3.org/TR/rdf11-concepts/) : 필독!
- [RDF Schema](https://www.w3.org/TR/rdf-schema/)