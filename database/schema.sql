CREATE TABLE customer (
    user_id INT AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    address_line1 VARCHAR(255),
    address_line2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    postal_code VARCHAR(20),
    PRIMARY KEY (user_id)
);
INSERT INTO ecomstore.customer (
  first_name, 
  last_name, 
  email, 
  password_hash, 
  phone, 
  address_line1, 
  address_line2, 
  city, 
  state, 
  country, 
  postal_code
) VALUES (
  'John', -- Example first name
  'Doe', -- Example last name
  'agn5089@psu.edu', -- Provided email
  '123', -- Hypothetical hashed password
  '555-1234', -- Example phone number
  '123 Main St', -- Example address line 1
  'Apt 101', -- Example address line 2
  'State College', -- Example city
  'PA', -- Example state
  'USA', -- Example country
  '16801' -- Example postal code
);


CREATE TABLE products (
    product_id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(500),
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    image_url VARCHAR(500),
    PRIMARY KEY (product_id)
);

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (user_id) REFERENCES customer(user_id)
);

CREATE TABLE cart (
    cart_id INT AUTO_INCREMENT,
    user_id INT,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    added_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (cart_id),
    FOREIGN KEY (user_id) REFERENCES customer(user_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
SELECT*FROM ecomstore.cart;