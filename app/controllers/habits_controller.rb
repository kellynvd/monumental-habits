class HabitsController < ApplicationController
  before_action :set_habit, only: [:show, :edit, :update, :destroy]

  def index
    authenticate_user!

    @habits = Habit.all
  end

  def show
  end

  def new
    authenticate_user!

    @habit = Habit.new
  end

  def edit
  end

  def create
    authenticate_user!

    @habit = Habit.new(habit_params)
    @habit.user = current_user

    if @habit.save
      redirect_to @habit, notice: 'Habit was successfully created.'
    else
      render :new
    end
  end

  def update
    authenticate_user!

    if @habit.update(habit_params)
      redirect_to @habit, notice: 'Habit was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    authenticate_user!

    @habit.destroy
    redirect_to habits_url, notice: 'Habit was successfully destroyed.'
  end

  private

  def set_habit
    @habit = Habit.find(params[:id])
  end

  def habit_params
    params.require(:habit).permit(:name)
  end
end
