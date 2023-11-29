import csv
import kMeans
import plotter
import random
import numpy as np
import neural

from keras.models import Sequential
from keras.layers import Dense
from keras.callbacks import TensorBoard
import keras

SEED = 42
EPSILON = 0.1
TEST = 0.1

names = []
data = []
classes = []
rawData = []

# Load data from csv file

with open("./irisdata.csv") as f:
    reader = csv.reader(f)
    rawData = [i for i in reader][1:]
    random.seed(SEED)
    rawData = np.array(random.sample(rawData, k=len(rawData)))

    data = np.array([[float(j) for k, j in enumerate(i) if k != len(i)-1] for i in rawData])
    classes = np.array([i[-1] for i in rawData])
    names = np.unique(classes)
    classes = np.array([[1 if j == i else 0 for j in range(len(names))] for i in [list(names).index(i) for i in classes]])

print(data)
print(classes)
print(names)

# Normalize data

data = (data - data.min(axis=0)) / (data.max(axis=0) - data.min(axis=0))

# Split data into training and testing sets

testData = data[:int(len(data) * TEST)]
trainingData = data[int(len(data) * TEST):]
testClasses = classes[:int(len(classes) * TEST)]
trainingClasses = classes[int(len(classes) * TEST):]

# Model node sizes

TRAINNODES = False
TRAINOPTIMIZERS = True
TRAINACTIVATORS = True

activator = "LeakyReLU"
finalActivator = "softmax"

if TRAINNODES:
    nodes = [
        [],
        [5],
        [8],
        [5, 5],
        [8, 8],
        [5, 5, 5],
        [5, 5, 5, 5]
    ]

    def constructModel(inputDim, outputDim, layers):
        model = Sequential(name="N"+"".join([str(i) for i in layers]))
        model.add(keras.Input(shape=(inputDim,)))
        for i in layers:
            model.add(Dense(i, activation=activator))
        model.add(Dense(outputDim, activation=finalActivator))

        model.compile(loss='MeanSquaredError', 
            optimizer='adam', 
            metrics=['accuracy']
        )

        return model

    models = [constructModel(len(trainingData[0]), len(trainingClasses[0]), i) for i in nodes]

    for model in models:
        model.summary()
        model.fit(trainingData, trainingClasses, epochs=100, batch_size=10, 
                  validation_data=(testData, testClasses), callbacks=[TensorBoard(log_dir="logs/"+model.name)])

if TRAINOPTIMIZERS:
    optimizers = [
        "SGD",
        "RMSprop",
        "Adagrad",
        "Adadelta",
        "Adam",
        "Adamax",
        "Nadam"
    ]

    def constructModel(inputDim, outputDim, optimizer):
        model = Sequential(name="O"+optimizer)
        model.add(keras.Input(shape=(inputDim,)))
        for i in [8, 8]:
            model.add(Dense(i, activation=activator))
        model.add(Dense(outputDim, activation=finalActivator))

        model.compile(loss='MeanSquaredError', 
            optimizer=optimizer, 
            metrics=['accuracy']
        )

        return model

    models = [constructModel(len(trainingData[0]), len(trainingClasses[0]), i) for i in optimizers]

    for model in models:
        model.summary()
        model.fit(trainingData, trainingClasses, epochs=100, batch_size=10, 
                validation_data=(testData, testClasses), callbacks=[TensorBoard(log_dir="logs/"+model.name)])

if TRAINACTIVATORS:
    activators = [
        "relu",
        "sigmoid",
        "softmax",
        "softplus",
        "softsign",
        "selu",
        "exponential",
        "leaky_relu",
        "relu6",
        "silu",
        "gelu"
    ]

    def constructModel(inputDim, outputDim, activator):
        model = Sequential(name="A"+activator)
        model.add(keras.Input(shape=(inputDim,)))
        for i in [8, 8]:
            model.add(Dense(i, activation=activator))
        model.add(Dense(outputDim, activation=finalActivator))

        model.compile(loss='MeanSquaredError', 
            optimizer="adam", 
            metrics=['accuracy']
        )

        return model

    models = [constructModel(len(trainingData[0]), len(trainingClasses[0]), i) for i in activators]

    for model in models:
        model.summary()
        model.fit(trainingData, trainingClasses, epochs=100, batch_size=10, 
                validation_data=(testData, testClasses), callbacks=[TensorBoard(log_dir="logs/"+model.name)])

