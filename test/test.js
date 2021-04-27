'use strict';

const should = require('chai').should();

const classes = require('../index.js');

describe('Stack', function () {

  let stack;

  beforeEach(function () {
    stack = new classes.Stack();
  });

  it('the class should provide a "push()" method', function () {
    stack.should.not.have.ownProperty('push');
    stack.push.should.be.a('function');
  });

  it('the class should provide a "pop()" method', function () {
    stack.should.not.have.ownProperty('pop');
    stack.pop.should.be.a('function');
  });

  it('should push and pop elements', function () {
    should.equal(stack.pop(), null);
    stack.push('hello').should.be.true;
    stack.push('world').should.be.true;
    stack.push('today').should.be.true;
    stack.pop().should.equal('today');
    stack.pop().should.equal('world');
    stack.pop().should.equal('hello');
    should.equal(stack.pop(), null);
    should.equal(stack.pop(), null);
  });

  it('should return its size', function () {
    stack.size().should.equal(0);
    stack.push('hello');
    stack.size().should.equal(1);
    stack.push('world');
    stack.size().should.equal(2);
    stack.pop();
    stack.size().should.equal(1);
    stack.pop();
    stack.size().should.equal(0);
  });

});

describe('Queue', function () {

  let queue;

  beforeEach(function () {
    queue = new classes.Queue();
  });

  it('the class should provide an "enqueue()" method', function () {
    queue.should.not.have.ownProperty('enqueue');
    queue.enqueue.should.be.a('function');
  });

  it('the class should provide a "dequeue()" method', function () {
    queue.should.not.have.ownProperty('dequeue');
    queue.dequeue.should.be.a('function');
  });

  it('should enqueue and dequeue elements', function () {
    should.equal(queue.dequeue(), null);
    queue.enqueue('hello').should.be.true;
    queue.enqueue('world').should.be.true;
    queue.enqueue('today').should.be.true;
    queue.dequeue().should.equal('hello');
    queue.enqueue('hello').should.be.true;
    queue.dequeue().should.equal('world');
    queue.dequeue().should.equal('today');
    queue.dequeue().should.equal('hello');
    should.equal(queue.dequeue(), null);
    should.equal(queue.dequeue(), null);
  });

  it('should return its size', function () {
    queue.size().should.equal(0);
    queue.enqueue('hello');
    queue.size().should.equal(1);
    queue.enqueue('world');
    queue.size().should.equal(2);
    queue.dequeue();
    queue.size().should.equal(1);
    queue.dequeue();
    queue.size().should.equal(0);
  });

});

describe('Linked list', function () {

});
