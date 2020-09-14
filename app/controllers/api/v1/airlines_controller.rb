module Api
    module V1
        class AirlinesController < ApplicationController
            def index
                airlines = Airline.AirlinesController
                render json: AirlineSerializer.new(airlines, options).serialized_json
            end
            
            def show
                airline = Airline.find_by(slug: params[:slug])
                # the params was define in the routes file.
                render json: AirlineSerializer.new(airline, options).serialized_json
            end
            
            def create
                airline = Airline.new(airline_params)

                if airline.save   
                    render json: AirlineSerializer.new(airline).serialized_json
                else
                    render json: {error: airline.errors.messages}, status: 422
                end
            end

            def update
                airline = Airline.find_by(slug: params[:slug])

                if airline.update(airline_params)  
                    render json: AirlineSerializer.new(airline, options).serialized_json
                else
                    render json: {error: airline.errors.messages}, status: 422
                end
            end

            def destroy
                airline = Airline.find_by(slug: params[:slug])

                if airline.destroy  
                    head :no_content
                else
                    render json: {error: airline.errors.messages}, status: 422
                    # error 422 is "unproccessable entity"
                end
            end

           
            private

            def airline_params
                params.require(:airline).permit(:name, :image_url)
            end

            # This options method is what will allow us to include any associated review data
            # in the json payload. A "compound document" will help solve that. Which is the method below??
            def options
                @options ||= {include: %i[reviews]}
            end
        end
    end
end