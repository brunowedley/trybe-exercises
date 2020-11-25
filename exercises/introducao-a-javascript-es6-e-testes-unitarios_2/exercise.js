const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customerName = order.name;
  const customerPhone = order.phoneNumber;
  const address = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;

  console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${address}, Nº: ${number}, AP: ${apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
  const nameChanged = order.name = 'Luiz Silva'
  const pizzas = order.pizza = 'muzzarella';
  const pizzas2 = order.pizza = 'calabresa'
  const drinks = order.order.drinks.coke.type;
  const money = order.payment = 'R$ 50,00'


  console.log(`Olá ${nameChanged}, o total do seu pedido de ${pizzas}, ${pizzas2} e ${drinks} é ${money}`)
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);