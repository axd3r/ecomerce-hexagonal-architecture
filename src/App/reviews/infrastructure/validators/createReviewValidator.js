import Product from "../../../products/domain/models/Products.js";
import User from "../../../users/domain/models/User.js";

class CreateReviewValidator {

    static async validate(data) {
        await this.validateUser(data.userId);
        await this.validateProduct(data.productId);
        this.validateCalification(data.calification);
        this.validateComment(data.comment);
    }

    static async validateUser(userId) {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error("El usuario no se encuentra registrado");
        }
    }

    static async validateProduct(productId) {
        const product = await Product.findByPk(productId);
        if (!product) {
            throw new Error("El producto seleccionado no se encuentra registrado");
        }
    }

    static validateCalification(calification) {
        if (!calification || calification.length < 3) {
            throw new Error("La calificación no puede estar vacía o es muy corta");
        }
    }

    static validateComment(comment) {
        if (!comment || comment.length < 10) {
            throw new Error("El comentario debe tener como mínimo 10 caracteres");
        }
    }
}

export default CreateReviewValidator;
